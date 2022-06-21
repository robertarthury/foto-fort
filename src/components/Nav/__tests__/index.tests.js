import React from 'react';
import { render, cleanup, getAllByLabelText} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


afterEach(cleanup);

describe( 'Nav component', () => {
    //first test
    it('renders', () => {
        render(<Nav />);
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is viisible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸')

    });
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})


