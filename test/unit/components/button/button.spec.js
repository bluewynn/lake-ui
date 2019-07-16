import { mount } from '@vue/test-utils';
import lakeButton from '@/components/button';

describe('button', () => {
  // basic test
  it('should render component and match snapshot', () => {
    const wrapper = mount(lakeButton);

    expect(wrapper.element).toMatchSnapshot();
  });

  // props test
  it('should have lake-btn-primary class when using type props', () => {
    const wrapper = mount(lakeButton, {
      propsData: {
        type: 'primary',
      },
    });

    expect(wrapper.classes('lake-btn-primary')).toBe(true);
  });

  it('should have lake-btn-small class when using size props', () => {
    const wrapper = mount(lakeButton, {
      propsData: {
        size: 'small',
      },
    });

    expect(wrapper.classes('lake-btn-small')).toBe(true);
  });

  it('should have lake-btn-inline class when using inline props', () => {
    const wrapper = mount(lakeButton, {
      propsData: {
        inline: true,
      },
    });

    expect(wrapper.classes('lake-btn-inline')).toBe(true);
  });

  it('should disabled click when using disabled props', () => {
    const wrapper = mount(lakeButton, {
      propsData: {
        disabled: true,
      },
    });
    const click = jest.fn();

    wrapper.vm.$on('click', click);
    wrapper.trigger('click');

    expect(click.mock.calls.length).toBe(0);
  });

  it('should render component with loading and match snapshot', () => {
    const wrapper = mount(lakeButton, {
      propsData: {
        loading: true,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  // event test
  it('should emit a click event', () => {
    const wrapper = mount(lakeButton);
    const click = jest.fn();

    wrapper.vm.$on('click', click);
    wrapper.trigger('click');

    expect(click.mock.calls.length).toBe(1);
  });

  // slot test
  it('should render component with slot and match snapshot', () => {
    const wrapper = mount(lakeButton, {
      slots: {
        default: 'submit',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
