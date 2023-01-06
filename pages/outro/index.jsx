import { render } from '../../commonComponents/pageBoilerplate.jsx';
import Content from './Content';
import { entryForSlug } from '../../commonComponents/utils.mjs';

render(entryForSlug('outro'), Content);
