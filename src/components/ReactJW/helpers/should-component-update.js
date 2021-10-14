function shouldComponentUpdate(prevProps, nextProps) {
  const hasFileChanged = prevProps.file !== nextProps.file;
  const hasPlaylistChanged = prevProps.playlist !== nextProps.playlist;

  return hasFileChanged || hasPlaylistChanged;
}

export default shouldComponentUpdate;
