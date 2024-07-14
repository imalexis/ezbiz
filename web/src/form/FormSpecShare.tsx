import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { FormSpecShareMutation } from "./__generated__/FormSpecShareMutation.graphql";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function FormSpecShare() {
  const { formID } = useParams();
  const [commit] = useMutation<FormSpecShareMutation>(mutation);
  const navigate = useNavigate();
  useEffect(() => {
    commit({
      variables: { input: { formSpecID: formID } },
      onCompleted: (response, err) => {
        navigate(
          `/admin/forms/${formID}/instance/${response.createFormInstance.id}`
        );
      },
    });
  }, []);
  return <div>hello</div>;
}

const mutation = graphql`
  mutation FormSpecShareMutation($input: CreateFormInstanceInput!) {
    createFormInstance(input: $input) {
      id
    }
  }
`;
