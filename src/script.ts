interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response: APIResponse<object> = {
  status: 200,
  type: "OK",
  data: {
    name: "name",
    age: 400,
  },
};
