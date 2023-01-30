import { rest } from 'msw'

export const handlers = [
    rest.get('/api/todos', (req, res, ctx) => {    
        return res(
            ctx.json({
                data: {
                    '234K2LJ3': {
                        id: '1',
                        value: 'in progress',
                        done: false
                    },
                    '234K2LJ3': {
                        id: '2',
                        value: 'completed',
                        done: tue
                    }
                }
            }),
        )
      }),
]