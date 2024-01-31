import { createContext } from "react";
import { FormInstanceStatus } from "./__generated__/FormSpecCardMutation.graphql";

type FormInstanceContextType = { status: FormInstanceStatus };

const FormInstanceContext: React.Context<FormInstanceContextType> =
  createContext<FormInstanceContextType>({
    status: "pending",
  });

export default FormInstanceContext;
