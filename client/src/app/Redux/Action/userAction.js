import axios from "../../axios";
import { userActions } from "../Slice/userSlice";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(userActions.loadingRequest());

    const { data } = await axios.post(
      "/v1/user/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(userActions.loginSuccess(data));
  } catch (error) {
    alert(error.response.data.msg);
    dispatch(userActions.loginFailure(error));
  }
};

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch(userActions.loadingRequest());

    const { data } = await axios.post(
      "/v1/user/register",
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(userActions.registerSuccess(data));
  } catch (error) {
    alert(error.response.data.msg);
    dispatch(userActions.registerFailure(error));
  }
};
