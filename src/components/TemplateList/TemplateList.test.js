import React from 'react'
import { shallow} from 'enzyme'
import TemplateList from './TemplateList'

it('expect to render template card component', () => {
    const  mockTemplates = [
        {
            "category": [
                "Health",
                "E-commerce",
                "Education"
            ],
            "created": "2021-06-03T09:57:27.892485",
            "description": "veniam, aliqua. labore ullamco irure",
            "link": "https://formpl.us/templates",
            "name": "irure tempor laborum."
        }
    ]
    expect(shallow(<TemplateList
            templates={mockTemplates} 
            currentPage={1}
            pageSize={15}
            category={'All'}
            sortType={'Ascending'}
            sortByDate={'Ascending'}
            PaginateArg={'sortByDate'}
        />
        )).toMatchSnapshot();
})