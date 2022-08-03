import Vue from 'vue';
import Avatar from 'ant-design-vue/lib/avatar';
import Select from 'ant-design-vue/lib/select';
import Button from 'ant-design-vue/lib/button';
import Switch from 'ant-design-vue/lib/switch';
import Modal from 'ant-design-vue/lib/modal';
import Input from 'ant-design-vue/lib/input';
import Tabs from 'ant-design-vue/lib/tabs';
import AList from 'ant-design-vue/lib/list';
import ACollapse from 'ant-design-vue/lib/collapse';
import AUpload from 'ant-design-vue/lib/upload';

[
  Avatar,
  Select,
  Select.Option,
  Button,
  Switch,
  Modal,
  Input,
  Tabs,
  Tabs.TabPane,
  Tabs.TabContent,
  AList,
  AList.Item,
  ACollapse,
  ACollapse.Panel,
  AUpload
].forEach((component) => {
  Vue.component(component.name, component);
});
