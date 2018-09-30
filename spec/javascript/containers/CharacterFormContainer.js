import CharacterFormContainer from '../../../app/javascript/react/containers/CharacterFormContainer'
import fetchMock from 'fetch-mock';

describe('CharactersIndexContainer', () => {
  let wrapper;
  let handleRedirect;
  let handleSelect;
  let fighter = {
    id: 1,
    name: "Fighter",
    description: "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.",
    main_stat: "Strength",
    suggested_task: "Do 20 push ups!",
    image_url:'/wow'
  }
  let wizard = {
    id: 2,
    name: "Wizard",
    description: "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.",
    main_stat: "Intelligence",
    suggested_task: "Do 20 push ups!",
    image_url:'/wow'
  }
  let bard = {
    id: 3,
    name: "Bard",
    description: "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.",
    main_stat: "Charisma",
    suggested_task: "Do 20 push ups!",
    image_url:'/wow'
  }

  let class_types = [fighter, wizard, bard]

  let newCharacter = {
    name: "bart",
    task: "do the bartman",
    class_type_id: fighter.id
  }

  beforeEach(() => {
    handleRedirect = spyOn(CharacterFormContainer.prototype, 'handleRedirect')
    //handleSelect = jasmine.createSpy('onClick spy')
    fetchMock.get(`/api/v1/class_types`, {
      status: 200,
      body: {
        class_types: class_types
      }
    });
    handleSelect = spyOn(CharacterFormContainer.prototype, 'handleSelect')
    wrapper = mount(<CharacterFormContainer
    />);
  });

  afterEach(fetchMock.restore)

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      class_array: [],
      selected_class: {},
      name: "",
      placeholder: "",
      task: "",
      errors: []
     });
  })

  it('renders a gets the class types with expected props', (done) => {
    setTimeout(() => {
      expect(wrapper.state()).toEqual({
        class_array: [fighter, wizard, bard],
        selected_class: {},
        name: "",
        placeholder: "",
        task: "",
        errors: []
      })
      done()
    }, 0)
  })

  it('renders class selection buttons based on fetched class data', (done) => {
    setTimeout(() => {
      expect(wrapper.find('.class_button').first().text()).toEqual('Fighter')
      wrapper.find('.class_button').first().simulate('click')
      expect(handleSelect).toHaveBeenCalled();
      done()
    }, 0)
  })

  it('redirects if a new character is sucessfully created', (done) => {
    fetchMock.post('/api/v1/characters', {
      status: 201,
      body: newCharacter
    });

    setTimeout(() => {
      wrapper.find('form').simulate('submit')
      setTimeout(() => {
        expect(handleRedirect).toHaveBeenCalled();
        done()
      })
    }, 0)
  })

  it('shows an error message when there is an error in response', (done) => {
    fetchMock.post('/api/v1/characters', {
      status: 200,
      body: {
        errors: ["Class type must exist"]
      }
    });
    wrapper.find('form').simulate('submit')
    setTimeout(() => {
      let error_message = wrapper.find('.error_message')
      expect(error_message.text()).toContain("Class type must exist")
      done()
    }, 0)
  })

})
