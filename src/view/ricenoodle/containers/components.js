import React, { Component } from 'react';
import Container from './Container';
import submenu from '../constants/submenu';

import ComponentContent from '../contents/components';
import AlertContent from '../contents/components/Alert';
import BadgeContent from '../contents/components/Badge';
import BreadcrumbContent from '../contents/components/Breadcrumb';
import ButtonContent from '../contents/components/Button';
import ButtonGroupContent from '../contents/components/ButtonGroup';
import CardContent from '../contents/components/Card';
import CarouselContent from '../contents/components/Carousel';
import CollapseContent from '../contents/components/Collapse';
import DividerContent from '../contents/components/Divider';
import DotContent from '../contents/components/Dot';
import DropdownContent from '../contents/components/Dropdown';
import ElfContent from '../contents/components/Elf';
import FormContent from '../contents/components/Form';
import GridContent from '../contents/components/Grid';
import InputGroupContent from '../contents/components/InputGroup';
import JumbotronContent from '../contents/components/Jumbotron';
import ListGroupContent from '../contents/components/ListGroup';
import LoaderContent from '../contents/components/Loader';
import MarkContent from '../contents/components/Mark';
import MediaContent from '../contents/components/Media';
import ModalContent from '../contents/components/Modal';
import NavContent from '../contents/components/Nav';
import NavbarContent from '../contents/components/Navbar';
import PaginationContent from '../contents/components/Pagination';
import PopoverContent from '../contents/components/Popover';
import ProgressContent from '../contents/components/Progress';
import ScrollspyContent from '../contents/components/Scrollspy';
import TableContent from '../contents/components/Table';
import TooltipContent from '../contents/components/Tooltip';

export class Components extends Component {
  render () {
    return (
      <Container submenu={submenu.components}>
        <ComponentContent/>
      </Container>
    )
  }
}

export class Alert extends Component {
  render () {
    return (
      <Container submenu={submenu.alert}>
        <AlertContent/>
      </Container>
    )
  }
}

export class Badge extends Component {
  render () {
    return (
      <Container submenu={submenu.badge}>
        <BadgeContent/>
      </Container>
    )
  }
}

export class Breadcrumb extends Component {
  render () {
    return (
      <Container submenu={submenu.breadcrumb}>
        <BreadcrumbContent/>
      </Container>
    )
  }
}

export class Button extends Component {
  render () {
    return (
      <Container submenu={submenu.button}>
        <ButtonContent/>
      </Container>
    )
  }
}

export class ButtonGroup extends Component {
  render () {
    return (
      <Container submenu={submenu.buttonGroup}>
        <ButtonGroupContent/>
      </Container>
    )
  }
}

export class Card extends Component {
  render () {
    return (
      <Container submenu={submenu.card}>
        <CardContent/>
      </Container>
    )
  }
}

export class Carousel extends Component {
  render () {
    return (
      <Container submenu={submenu.carousel}>
        <CarouselContent/>
      </Container>
    )
  }
}

export class Collapse extends Component {
  render () {
    return (
      <Container submenu={submenu.collapse}>
        <CollapseContent/>
      </Container>
    )
  }
}

export class Divider extends Component {
  render () {
    return (
      <Container submenu={submenu.divider}>
        <DividerContent/>
      </Container>
    )
  }
}

export class Dot extends Component {
  render () {
    return (
      <Container submenu={submenu.dot}>
        <DotContent/>
      </Container>
    )
  }
}

export class Dropdown extends Component {
  render () {
    return (
      <Container submenu={submenu.dropdown}>
        <DropdownContent/>
      </Container>
    )
  }
}

export class Elf extends Component {
  render () {
    return (
      <Container submenu={submenu.elf}>
        <ElfContent/>
      </Container>
    )
  }
}

export class Form extends Component {
  render () {
    return (
      <Container submenu={submenu.form}>
        <FormContent/>
      </Container>
    )
  }
}

export class Grid extends Component {
  render () {
    return (
      <Container submenu={submenu.grid}>
        <GridContent/>
      </Container>
    )
  }
}

export class InputGroup extends Component {
  render () {
    return (
      <Container submenu={submenu.inputGroup}>
        <InputGroupContent/>
      </Container>
    )
  }
}

export class Jumbotron extends Component {
  render () {
    return (
      <Container submenu={submenu.jumbotron}>
        <JumbotronContent/>
      </Container>
    )
  }
}

export class ListGroup extends Component {
  render () {
    return (
      <Container submenu={submenu.listGroup}>
        <ListGroupContent/>
      </Container>
    )
  }
}

export class Loader extends Component {
  render () {
    return (
      <Container submenu={submenu.loader}>
        <LoaderContent/>
      </Container>
    )
  }
}

export class Mark extends Component {
  render () {
    return (
      <Container submenu={submenu.mark}>
        <MarkContent/>
      </Container>
    )
  }
}

export class Media extends Component {
  render () {
    return (
      <Container submenu={submenu.media}>
        <MediaContent/>
      </Container>
    )
  }
}

export class Modal extends Component {
  render () {
    return (
      <Container submenu={submenu.modal}>
        <ModalContent/>
      </Container>
    )
  }
}

export class Nav extends Component {
  render () {
    return (
      <Container submenu={submenu.nav}>
        <NavContent/>
      </Container>
    )
  }
}

export class Navbar extends Component {
  render () {
    return (
      <Container submenu={submenu.navbar}>
        <NavbarContent/>
      </Container>
    )
  }
}

export class Pagination extends Component {
  render () {
    return (
      <Container submenu={submenu.pagination}>
        <PaginationContent/>
      </Container>
    )
  }
}

export class Popover extends Component {
  render () {
    return (
      <Container submenu={submenu.popover}>
        <PopoverContent/>
      </Container>
    )
  }
}

export class Progress extends Component {
  render () {
    return (
      <Container submenu={submenu.progress}>
        <ProgressContent/>
      </Container>
    )
  }
}

export class Scrollspy extends Component {
  render () {
    return (
      <Container submenu={submenu.scrollspy}>
        <ScrollspyContent/>
      </Container>
    )
  }
}

export class Table extends Component {
  render () {
    return (
      <Container submenu={submenu.table}>
        <TableContent/>
      </Container>
    )
  }
}

export class Tooltip extends Component {
  render () {
    return (
      <Container submenu={submenu.tooltip}>
        <TooltipContent/>
      </Container>
    )
  }
}
