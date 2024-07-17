import { ACTIONS } from "./constants";

export const createAction = (description) => ({
  type: ACTIONS.CREATE,
  payload: {
    description,
  },
});

export const resolvedAction = (id) => ({
  type: ACTIONS.RESOLVED,
  payload: {
    id,
  },
});

export const unResolvedAction = (id) => ({
  type: ACTIONS.UNRESOLVED,
  payload: {
    id,
  },
});

export const deleteAction = (id) => ({
  type: ACTIONS.CREATE,
  payload: {
    id,
  },
});
