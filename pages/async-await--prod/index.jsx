import { render } from '../../commonComponents/pageBoilerplate';
import Content from './Content';
import { entryForSlug } from '../../commonComponents/utils.mjs';

render(entryForSlug('async-await--prod'), Content);
