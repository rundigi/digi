import { GraphQLError } from "graphql";

export class AuthenticationError extends GraphQLError {
  constructor(message = "You must be logged in to perform this action") {
    super(message, {
      extensions: { code: "UNAUTHENTICATED" },
    });
  }
}

export class AuthorizationError extends GraphQLError {
  constructor(message = "You do not have permission to perform this action") {
    super(message, {
      extensions: { code: "FORBIDDEN" },
    });
  }
}

export class NotFoundError extends GraphQLError {
  constructor(resource = "Resource") {
    super(`${resource} not found`, {
      extensions: { code: "NOT_FOUND" },
    });
  }
}

export class ValidationError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: { code: "BAD_INPUT" },
    });
  }
}

export class ConflictError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: { code: "CONFLICT" },
    });
  }
}
