import Avatar from './avatar';
import Button from './button';
import { Card, CardActions, CardButton, CardHeader, CardMedia, CardSection } from './card';
import Checkbox from './checkbox';
import { Dialog, DialogButton } from './dialog';
import { Drawer, DrawerContent, DrawerHeader } from './drawer';
import FormField from './form-field';
import Icon from './icon';
import { List, ListItem, ListItemGraphic, ListItemText, ListItemMeta } from './list';
import Radio from './radio';
import Spinner from './spinner';
import { Tab, TabBar } from './tabs';
import TextField from './text-field';
import Typography from './typography';

export function install(Vue, options) {
    Vue.component('mdc-avatar', Avatar);
    Vue.component('mdc-button', Button);
    Vue.component('mdc-card', Card);
    Vue.component('mdc-card-actions', CardActions);
    Vue.component('mdc-card-button', CardButton);
    Vue.component('mdc-card-header', CardHeader);
    Vue.component('mdc-card-media', CardMedia);
    Vue.component('mdc-card-section', CardSection);
    Vue.component('mdc-checkbox', Checkbox);
    Vue.component('mdc-dialog', Dialog);
    Vue.component('mdc-dialog-button', DialogButton);
    Vue.component('mdc-drawer', Drawer);
    Vue.component('mdc-drawer-content', DrawerContent);
    Vue.component('mdc-drawer-header', DrawerHeader);
    Vue.component('mdc-form-field', FormField);
    Vue.component('mdc-icon', Icon);
    Vue.component('mdc-list', List);
    Vue.component('mdc-list-item', ListItem);
    Vue.component('mdc-list-item-graphic', ListItemGraphic);
    Vue.component('mdc-list-item-text', ListItemText);
    Vue.component('mdc-list-item-meta', ListItemMeta);
    Vue.component('mdc-radio', Radio);
    Vue.component('mdc-spinner', Spinner);
    Vue.component('mdc-tab', Tab);
    Vue.component('mdc-tab-bar', TabBar);
    Vue.component('mdc-text-field', TextField);
    Vue.component('mdc-typography', Typography);
};

export {
    Avatar,
    Button,
    Card, CardHeader,
    Checkbox,
    Dialog, DialogButton,
    Drawer, DrawerContent, DrawerHeader,
    FormField,
    Icon,
    List, ListItem, ListItemGraphic, ListItemText, ListItemMeta,
    Radio,
    Spinner,
    TextField,
    Typography
};