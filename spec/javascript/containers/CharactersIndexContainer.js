import CharactersIndexContainer from '../../../app/javascript/react/containers/CharactersIndexContainer'
import CharacterTile from '../../../app/javascript/react/components/CharacterTile';
import fetchMock from 'fetch-mock';

describe('CharactersIndexContainer', () => {
  let wrapper;
  let class_type = {
    name: "Fighter",
    description: "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.",
    main_stat: "Strength",
    suggested_task: "Do 20 push ups!",
    image_url:'/wow'
  }
  let character1 = {
    id: 1,
    user_id: 1,
    class_type: class_type,
    name: 'SquirtleMan',
    level: 1,
    image_url: '/wow',
    image_tier: 1,
    task: 'do dishes',
    stat: 1,
    health: 10,
    message: 'new character created'
  }

  let characters = [character1]

  beforeEach(() => {
    spyOn(CharactersIndexContainer.prototype, 'handleClick').and.callThrough();
    fetchMock.get(`/api/v1/characters`, {
      status: 200,
      body: {
        "characters": characters
      }
    });
    wrapper = mount(<CharactersIndexContainer
    />);
  });

  afterEach(fetchMock.restore)


  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ characters_array: [] });
  })


  it('renders a CharacterTile', (done) => {
    setTimeout(() => {
      expect(wrapper.find(CharacterTile)).toBePresent();
      done()
    }, 0)
  })

  it('renders a CharacterTile with expected props', (done) => {
    setTimeout(() => {
      expect(wrapper.find(CharacterTile).props()).toEqual({
        id: 1,
        className: 'Fighter',
        level: 1,
        image_url: '/wow',
        image_tier: 1,
        name: 'SquirtleMan',
        task: 'do dishes',
        message: 'new character created',
        onClick: jasmine.any(Function)
      });
      done()
    }, 0)
  })

})
