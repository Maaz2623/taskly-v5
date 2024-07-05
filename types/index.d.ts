declare type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  photo: string;
};

export type CreateTaskProps = {
  clerkId: string | null;
  title: string;
  description: string;
  priority: string;
};

export type TaskProps = {
  title: string;
  description: string;
  priority: string;
  isPending: boolean;
  isCompleted: boolean;
  isOutDated: boolean;
  _id: string;
};
