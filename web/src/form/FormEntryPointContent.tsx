import { Flex } from "antd";
import { FormTemplateCreateCard } from "./FormTemplateCreateCard";
import { FormTemplateCard } from "./FormTemplateCard";
import FormSpecList from "./FormSpecList";

export function FormEntryPointContent() {
  return (
    <>
      <Flex
        style={{
          height: "320px",
        }}
        align="center"
        justify="space-evenly"
      >
        <FormTemplateCreateCard />
        {[1, 2, 3, 4].map((_) => (
          <FormTemplateCard />
        ))}
      </Flex>
      <FormSpecList />
    </>
  );
}
