import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import {AutoCrud} from "@vaadin/hilla-react-crud";
import {PersonService} from "Frontend/generated/endpoints";
import PersonModel from "Frontend/generated/com/example/application/data/PersonModel";

export const config: ViewConfig = { menu: { order: 0, icon: 'line-awesome/svg/file.svg' }, title: 'Empty' };

export default function EmptyView() {
  return (
    <AutoCrud className="h-full w-full" service={PersonService} model={PersonModel} />
  );
}
