import TestComponent from 'console/components/data/QueryRecipeListingColumns';
import { StubComponent } from 'console/tests/utils';

const { WrappedComponent: QueryRecipeListingColumns } = TestComponent;

describe('<QueryRecipeListingColumns>', () => {
  const props = {
    loadRecipeListingColumns: () => {},
  };

  it('should work', () => {
    const wrapper = () => shallow(<QueryRecipeListingColumns {...props} />);

    expect(wrapper).not.toThrow();
  });

  it('should call loadRecipeListingColumns on mount', () => {
    let called = false;
    shallow(
      <QueryRecipeListingColumns
        loadRecipeListingColumns={() => {
          called = true;
        }}
      />,
    );

    expect(called).toBe(true);
  });

  it('should call loadRecipeListingColumns once if container props change', () => {
    let callCount = 0;
    const wrapper = mount(
      <StubComponent fakeProp={1}>
        <QueryRecipeListingColumns
          loadRecipeListingColumns={() => {
            callCount += 1;
          }}
        />
      </StubComponent>,
    );

    wrapper.setProps({ fakeProp: 2 });
    wrapper.setProps({ fakeProp: 3 });
    wrapper.setProps({ fakeProp: 4 });

    expect(callCount).toBe(1);
  });

  it('should not render anything', () => {
    const wrapper = shallow(<QueryRecipeListingColumns {...props} />);
    expect(wrapper.children().length).toBe(0);
  });
});
