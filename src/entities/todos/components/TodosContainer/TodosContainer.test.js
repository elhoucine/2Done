import { render, screen, waitFor } from '@testing-library/react'
import TodosContainer from './TodosContainer'

describe('<TodosContainer/>', () => {
    describe('HTML', () => {
        it('renders with loader', () => {
            render(<TodosContainer />)
            const loading = screen.getByText('Loading items, please hold on...')
            expect(loading).toBeVisible();
        })

        it('removes loader after fetching', async () => {
            render(<TodosContainer />)
            await waitFor(() => screen.getByText('Add'))
            const loading = screen.queryByText('Loading items, please hold on...')
            expect(loading).toBeNull()
        })

        it.skip('render with fetched data', () => {
            // TODO: fix mock: network error
        })
    });
})