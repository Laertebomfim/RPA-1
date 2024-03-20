import GridText from '../../components/gridText';
import { mock as informationMockGrid } from '../../components/gridText/mock';
import { BaseProps } from '.';

export const mock: BaseProps = {
  children: GridText(informationMockGrid),
  textFooter: `<p><a href='http://www.test.com'>Pellentesque habitant morbi tristique senectus</a>
</p>`,
  information: [
    { children: 'link', http: 'http://www.test.com' },
    { children: 'link', http: 'http://www.test.com' },
    { children: 'link', http: 'http://www.test.com' },
    { children: 'link', http: 'http://www.test.com' },
    { children: 'link', http: 'http://www.test.com' },
    { children: 'link', http: 'http://www.test.com' },
    { children: 'link', http: 'http://www.test.com' },
  ],
  logoLink: '',
  logoText: 'Logo',
  logoImgUrl: '#',
};
