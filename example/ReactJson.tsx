import * as React from 'react';
import loadable from '@loadable/component';
import { useStore } from '../.';
const Json = loadable(() => import('react-json-view'));

interface ReactJsonProps {}

export const ReactJson: React.FC<ReactJsonProps> = ({}) => {
  const src = useStore(
    state => state.applets,
    (olds, news) => ({ old: olds, new: news })
  );

  React.useEffect(() => {
    console.log(src);
  }, [src]);

  return (
    <>
      <Json src={src} collapsed />
    </>
  );
};
