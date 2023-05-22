import { MemoryRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/lib/theme';

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Story: any) => (
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </MemoryRouter>
  ),
];
