import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import {AutoCrud} from "@vaadin/hilla-react-crud";
import {SamplePersonEndpoint} from "Frontend/generated/endpoints";
import SamplePersonModel from "Frontend/generated/com/example/application/data/SamplePersonModel";

export const config: ViewConfig = { menu: { order: 0, icon: 'line-awesome/svg/file.svg' }, title: 'Empty' };

export default function EmptyView() {
  return (
    <AutoCrud className="h-full w-full" service={SamplePersonEndpoint} model={SamplePersonModel} />
  );
}
