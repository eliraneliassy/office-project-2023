import { Meta } from '@storybook/angular';
import { SlideShowComponent } from './slide-show.component';

export default {
  title: 'SlideShowComponent',
  component: SlideShowComponent,
} as Meta<SlideShowComponent>;

export const Primary = {
  render: (args: SlideShowComponent) => ({
    props: args,
  }),
  args: {
    slides: [],
  },
};
