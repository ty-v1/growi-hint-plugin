import 'remark-hint/test/style.css';
// @ts-ignore
import remarkHint from 'remark-hint';

declare const growiFacade: any;

const activate = (): void => {
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  const { optionsGenerators } = growiFacade.markdownRenderer;

  optionsGenerators.customGenerateViewOptions = (...args: any[]) => {
    // @ts-ignore
    const options = optionsGenerators.generateViewOptions(...args);
    options.remarkPlugins.push(remarkHint)

    return options;
  };
};

if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators['growi-hint-plugin'] = {
  activate,
  deactivate: () => {},
};
