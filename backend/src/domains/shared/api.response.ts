export type SuccessResponse<T> = {
  success: boolean;
  data: T;
};

export type ErrorResponse = {
  success: boolean;
  message: string | string[];
};

export const responses = {
  toJSON: function successResponse<T>(
    success: boolean,
    data: T,
  ): SuccessResponse<T> {
    return {
      success,
      data,
    };
  },
};
