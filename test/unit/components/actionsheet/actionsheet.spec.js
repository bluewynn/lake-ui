import { mount } from '@vue/test-utils';
import actionsheet from '@/components/actionsheet';

describe('actionsheet', () => {
  const items = [
    {
      name: 'action 1',
    },
    {
      name: 'action 2',
    },
    {
      name: 'action 3',
    },
  ];

  // basic test
  test('should render component and match snapshot', () => {
    const wrapper = mount(actionsheet);

    expect(wrapper.contains('.lake-actionsheet')).toBe(false);
    expect(wrapper.element).toMatchSnapshot();
  });

  // props test
  test('should render component with show props and match snapshot', () => {
    const wrapper = mount(actionsheet, {
      propsData: {
        show: true,
      },
    });

    expect(wrapper.contains('.lake-actionsheet')).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should render component with title props and match snapshot', () => {
    const wrapper = mount(actionsheet, {
      propsData: {
        show: true,
        title: 'test title',
      },
    });

    expect(wrapper.find('.lake-actionsheet-title').text()).toBe('test title');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should render component with items props and match snapshot', () => {
    const wrapper = mount(actionsheet, {
      propsData: {
        show: true,
        items,
      },
    });

    expect(wrapper.findAll('.lake-actionsheet-item').filter(item => item.text()).length).toBe(3);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should render component with showCancelBtn props and match snapshot', () => {
    const wrapper = mount(actionsheet, {
      propsData: {
        show: true,
        showCancelBtn: false,
      },
    });

    expect(wrapper.contains('.lake-actionsheet-operation-cancel')).toBe(false);
  });

  test('should render component with showCancelBtn props', () => {
    const wrapper = mount(actionsheet, {
      propsData: {
        show: true,
        cancelBtnText: 'be careful cancel',
      },
    });

    expect(wrapper.find('.lake-actionsheet-operation-cancel').text()).toBe('be careful cancel');
  });

  // event test
  test('should emit a select event with item params', () => {
    const wrapper = mount(actionsheet, {
      propsData: {
        show: true,
        items,
      },
    });
    const click = jest.fn(item => item);
    const close = jest.fn();

    wrapper.vm.$on('select', click);
    wrapper.vm.$on('close', close);
    wrapper.find('.lake-actionsheet-item').trigger('click');

    expect(click.mock.calls.length).toBe(1);
    expect(close.mock.calls.length).toBe(1);
    expect(click.mock.results[0].value).toEqual(items[0]);
  });

  test('should emit a close event when click close btn', () => {
    const wrapper = mount(actionsheet, {
      propsData: {
        show: true,
      },
    });
    const click = jest.fn();

    wrapper.vm.$on('close', click);
    wrapper.find('.lake-actionsheet-operation-cancel').trigger('click');

    expect(click.mock.calls.length).toBe(1);
  });

  // slot test
});
