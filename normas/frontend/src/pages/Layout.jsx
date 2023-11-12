const Layout = ({ header, aside, content }) => {
  return (
    <div>
      {header}
      {aside}

      <div className="pl-72 py-10">{content}</div>
    </div>
  );
};

export default Layout;
