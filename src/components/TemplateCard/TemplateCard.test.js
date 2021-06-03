import React from 'react'
import { shallow} from 'enzyme'
import TemplateCard from './TemplateCard'

it('expect to render template card component', () => {
    expect(shallow(<TemplateCard/>)).toMatchSnapshot();
})