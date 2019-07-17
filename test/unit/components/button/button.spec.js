import { mount } from '@vue/test-utils';
import button from '@/components/button';

describe('button', () => {
  // basic test
  test('should render component and match snapshot', () => {
    const wrapper = mount(button);

    expect(wrapper.element).toMatchSnapshot();
  });

  // props test
  test('should have lake-btn-primary class when using type props', () => {
    const wrapper = mount(button, {
      propsData: {
        type: 'primary',
      },
    });

    expect(wrapper.classes('lake-btn-primary')).toBe(true);
  });

  test('should have lake-btn-small class when using size props', () => {
    const wrapper = mount(button, {
      propsData: {
        size: 'small',
      },
    });

    expect(wrapper.classes('lake-btn-small')).toBe(true);
  });

  test('should have lake-btn-inline class when using inline props', () => {
    const wrapper = mount(button, {
      propsData: {
        inline: true,
      },
    });

    expect(wrapper.classes('lake-btn-inline')).toBe(true);
  });

  test('should disabled click when using disabled props', () => {
    const wrapper = mount(button, {
      propsData: {
        disabled: true,
      },
    });
    const click = jest.fn();

    wrapper.vm.$on('click', click);
    wrapper.trigger('click');

    expect(click.mock.calls.length).toBe(0);
  });

  test('should render component with loading and match snapshot', () => {
    const wrapper = mount(button, {
      propsData: {
        loading: true,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  // event test
  test('should emit a click event', () => {
    const wrapper = mount(button);
    const click = jest.fn();

    wrapper.vm.$on('click', click);
    wrapper.trigger('click');

    expect(click.mock.calls.length).toBe(1);
  });

  // slot test
  test('should render component with slot and match snapshot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'submit',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
