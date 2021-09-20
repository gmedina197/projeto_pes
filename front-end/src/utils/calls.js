import Api from "./api";

export const makeLogin = async (email, password) => {
  try {
    const res = await Api.post("login", {
      email,
      password,
    });

    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (name, email, password) => {
  try {
    const res = await Api.post("users", {
      name,
      email,
      password,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
