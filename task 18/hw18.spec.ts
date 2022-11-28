// - Написать минимум 10 API тестов для разных HTTP методов.
// Использовать Jest + superAgent

import superagent from "superagent";

describe("#1: GET", function () {
  test("GET a user list", async () => {
    const res = await superagent.get("https://reqres.in/api/users?page=2");
    expect(res.status).toBe(200);
  });
});

describe("#2: GET", function () {
  test("GET a user's email", async () => {
    const res = await superagent.get("https://reqres.in/api/users?page=2");
    expect(res.body.data[2].email).toBe("tobias.funke@reqres.in");
  });
});

describe("#3: GET", function () {
  test("Get an error", async () => {
    try {
      await superagent.get("https://reqres.in/api/users/23");
    } catch (error: any) {
      expect(error.status).toBe(404);
    }
  });
});

describe("#4: POST", function () {
  test("Post a new user", async () => {
    const newObject: { name: string; job: string } = {
      name: "Liudmila",
      job: "QA",
    };
    const res = await superagent
      .post("https://reqres.in/api/users")
      .set("Content-Type", "application/json")
      .send({ name: newObject.name, job: newObject.job });
    expect(res.status).toEqual(201);
    expect(res.body.name).toEqual(newObject.name);
    expect(res.body.job).toEqual(newObject.job);
  });

  describe("#5: PUT", function () {
    test("Put/update a new user", async () => {
      const newObject: { name: string; job: string } = {
        name: "Svetlana",
        job: "Programmer",
      };
      const res = await superagent
        .post("https://reqres.in/api/users/4")
        .set("Content-Type", "application/json")
        .send({ name: newObject.name, job: newObject.job });
      expect(res.status).toEqual(201);
      expect(res.body.name).toEqual(newObject.name);
      expect(res.body.job).toEqual(newObject.job);
    });
  });
});

describe("#6: PATCH", function () {
  test("Update #2", async () => {
    const newObject: { name: string; job: string } = {
      name: "Vladimir",
      job: "Scrum master",
    };
    const res = await superagent
      .post("https://reqres.in/api/users/5")
      .set("Content-Type", "application/json")
      .send({ name: newObject.name, job: newObject.job });
    expect(res.status).toEqual(201);
    expect(res.body.name).toEqual(newObject.name);
    expect(res.body.job).toEqual(newObject.job);
  });
});

describe("#7: DELETE", function () {
  test("Delete a user", async () => {
    try {
      await superagent.delete("https://reqres.in/api/users/5");
    } catch (error: any) {
      expect(error.status).toBe(204);
    }
  });
});

describe("#8: POST", function () {
  test("POST: successful registration", async () => {
    const newObject: { email: string; password: string } = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    const res = await superagent
      .post("https://reqres.in/api/register")
      .set("Content-Type", "application/json")
      .send({ email: newObject.email, password: newObject.password });
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual(4);
    expect(res.body.token).toEqual("QpwL5tke4Pnpja7X4"); // TOKEN
  });
});

describe("#9: POST", function () {
  test("POST: unsuccessful registration", async () => {
    const newObject: { email: string } = {
      email: "peter@klaven",
    };
    try {
      await superagent
        .post("https://reqres.in/api/login")
        .set("Content-Type", "application/json")
        .send({ email: newObject.email });
    } catch (error: any) {
      expect(error.status).toEqual(400);
      expect(error.response.body.error).toEqual("Missing password");
    }
  });

  describe("#10: GET", function () {
    test("GET a delayed response", async () => {
      const res = await superagent.get("https://reqres.in/api/users?delay=3");
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeTruthy();
    });
  });
});
