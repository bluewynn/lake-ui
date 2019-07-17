import { mount } from '@vue/test-utils';
import actionsheet from '@/components/actionsheet';

describe('actionsheet', () => {
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
        items: [
          {
            name: 'action 1',
          },
          {
            name: 'action 2',
          },
          {
            name: 'action 3',
          },
        ],
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

  // slot test
});
