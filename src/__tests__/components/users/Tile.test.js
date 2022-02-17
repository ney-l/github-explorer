import { render, screen } from '@testing-library/react';
import { Tile } from 'components/users';

test('renders nothing if no `value` prop passed', () => {
  const props = {
    title: 'My Title',
    externalLink: 'https://google.com',
  };
  render(
    <Tile title={props.title} value={null} externalLink={props.externalLink} />
  );
  expect(screen.queryByText(props.title)).not.toBeInTheDocument();
  expect(screen.queryByText(props.externalLink)).not.toBeInTheDocument();

  render(<Tile />);
  expect(screen.queryByText(props.title)).not.toBeInTheDocument();
  expect(screen.queryByText(props.externalLink)).not.toBeInTheDocument();
});

test('renders title and value', () => {
  const props = {
    title: 'My Title',
    value: 'My Value',
  };
  render(<Tile title={props.title} value={props.value} />);

  expect(screen.getByText(props.title).innerHTML).toBe(props.title);
  expect(screen.getByText(props.value).innerHTML).toBe(props.value);
});

test('renders title, value and external link', () => {
  const props = {
    title: 'My Title',
    externalLink: 'https://google.com',
    value: 'My Value',
  };
  render(
    <Tile
      title={props.title}
      externalLink={props.externalLink}
      value={props.value}
    />
  );
  expect(screen.getByText(props.title).innerHTML).toBe(props.title);
  const anchorNode = screen.getByText(props.value);
  expect(anchorNode).toHaveAttribute('href', props.externalLink);
});

test('opens external link in a new tab', () => {
  const props = {
    title: 'My Title',
    externalLink: 'https://google.com',
    value: 'My Value',
  };
  render(
    <Tile
      title={props.title}
      externalLink={props.externalLink}
      value={props.value}
    />
  );
  expect(screen.getByText(props.title).innerHTML).toBe(props.title);
  const anchorNode = screen.getByText(props.value);
  expect(anchorNode).toHaveAttribute('href', props.externalLink);
  expect(anchorNode).toHaveAttribute('target', '_blank');
  expect(anchorNode).toHaveAttribute('rel', 'noreferrer');
});
