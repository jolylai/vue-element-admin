import lang from "element-plus/lib/locale/lang/zh-cn";
import locale from "element-plus/lib/locale";

import { Button, Form, Input, Icon } from "element-plus";

export default app => {
  locale.use(lang);

  app.use(Button);
  app.use(Form);
  app.use(Input);
  app.use(Icon);
  // app.use(Select);
};
