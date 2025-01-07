interface Params {
  email: string;
  password: string;
}

import useRequest from "../utils/useRequest";

const useLoginMutation = ({ email, password }: Params) => {
  const { post } = useRequest();
  try {
    const data = post({ url: "/user/login", payload: { email, password } });
    return data;
  } catch (e) {
    throw e;
  }
};

export default useLoginMutation;
