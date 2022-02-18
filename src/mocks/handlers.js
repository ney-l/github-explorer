import { rest } from 'msw';
import { baseUrl } from 'context/users/UserApi';
import { repos, user, users } from './data';

export const Endpoints = {
  search: `${baseUrl}/search/users`,
  user: `${baseUrl}/users/*`,
  repos: `${baseUrl}/users/*/repos`,
};

const userSearchResponse = rest.get(Endpoints.search, (req, res, ctx) => {
  return res(ctx.json({ items: users }));
});

const userRepoResponse = rest.get(Endpoints.repos, (req, res, ctx) => {
  return res(ctx.json(repos));
});

export const createApiLimitErrorResponseForRoute = (endpoint) =>
  rest.get(endpoint, (req, res, ctx) => {
    return res(
      ctx.status(403),
      ctx.json({
        message:
          "API rate limit exceeded for 122.175.144.204. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
      })
    );
  });

export const searchApiLimitError = createApiLimitErrorResponseForRoute(
  Endpoints.search
);

export const getUserApiLimitError = createApiLimitErrorResponseForRoute(
  Endpoints.user
);

export const getReposApiLimitError = createApiLimitErrorResponseForRoute(
  Endpoints.repos
);

const userResponse = rest.get(Endpoints.user, (req, res, ctx) => {
  return res(ctx.json(user));
});

export const handlers = [userSearchResponse, userRepoResponse, userResponse];
