import { rest } from 'msw';
import { baseUrl } from 'context/users/UserApi';

const searchEndPoint = `${baseUrl}/search/users`;

export const users = [
  { id: 1, login: 'user1' },
  { id: 2, login: 'user2' },
];

const userSearchResponse = rest.get(searchEndPoint, (req, res, ctx) => {
  return res(ctx.json({ items: users }));
});

export const apiLimitErrorResponse = rest.get(
  searchEndPoint,
  (req, res, ctx) => {
    return res(
      ctx.status(403),
      ctx.json({
        message:
          "API rate limit exceeded for 122.175.144.204. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
      })
    );
  }
);

export const handlers = [userSearchResponse];
