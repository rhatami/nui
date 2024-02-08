import { Avatar, Flex, Heading, TextField } from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  return (
    <nav className="nav" key="navbar">
      <Flex justify="between" align="center">
        <Flex align="center" gap="3">
          <Pencil2Icon height="12%" width="12%" />
          <Heading className="SiteTitle" size="4">
            کارتابل من
          </Heading>
        </Flex>
        <Flex justify="between" gap="9">
          <TextField.Root>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input
              className="SearchInput"
              radius="full"
              placeholder="جستجو در یادداشت ها ..."
            />
          </TextField.Root>
          <Avatar
            src="/profile.jpg"
            fallback="U"
            size="3"
            radius="full"
            className="curor-pointer"
          />
        </Flex>
      </Flex>
    </nav>
  );
};
export default NavBar;
