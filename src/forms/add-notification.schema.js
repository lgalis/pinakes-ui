import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import formMessages from '../messages/form.messages';
import debouncedValidatorName from './notification-name-async-validator';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';
import notificationMessages from '../messages/notification.messages';
import loadNotificationTypesOptions from './load-notification_types-debounced';

const notificationTypeSchema = (intl, notificationType) => {
  return {
    component: componentTypes.SUB_FORM,
    name: 'settings',
    id: 'notification-settings',
    title: 'Settings',
    label: intl.formatMessage(notificationMessages.settings),
    condition: {
      when: 'notification_type',
      is: notificationType.id
    },
    fields: notificationType?.setting_schema?.schema?.fields || []
  };
};

const addNotificationInfoSchema = (intl) => [
  {
    component: componentTypes.TEXT_FIELD,
    name: 'name',
    isRequired: true,
    id: 'notification-name',
    label: intl.formatMessage(formMessages.notificationSettingName),
    validate: [
      (value) => debouncedValidatorName(value, undefined, intl),
      {
        type: validatorTypes.REQUIRED,
        message: intl.formatMessage(formMessages.enterNotificationSettingName)
      }
    ]
  },
  {
    component: componentTypes.SELECT,
    label: intl.formatMessage(notificationMessages.type),
    name: 'notification_type',
    simpleValue: true,
    loadOptions: loadNotificationTypesOptions
  }
];

const addNotificationSchema = (intl, notificationTypes) => {
  console.log(
    'Debug - map: ',
    notificationTypes && notificationTypes.length
      ? notificationTypes.map((notification) =>
          notificationTypeSchema(intl, notification)
        )
      : []
  );

  console.log('Debug return fields: ', {
    fields: [
      ...addNotificationInfoSchema(intl),
      ...(notificationTypes && notificationTypes.length
        ? notificationTypes.map((notification) =>
            notificationTypeSchema(intl, notification)
          )
        : [])
    ]
  });
  return {
    fields: [
      ...addNotificationInfoSchema(intl),
      ...(notificationTypes && notificationTypes.length
        ? notificationTypes.map((notification) =>
            notificationTypeSchema(intl, notification)
          )
        : [])
    ]
  };
};

export const editNotificationSchema = (intl, nSetting, notificationTypes) => {
  console.log(
    'Debug - map: ',
    notificationTypes && notificationTypes.length
      ? notificationTypes.map((notification) =>
          notificationTypeSchema(intl, notification)
        )
      : []
  );

  console.log('Debug return fields: ', {
    fields: [
      ...addNotificationInfoSchema(intl),
      ...(notificationTypes && notificationTypes.length
        ? notificationTypes.map((notification) =>
            notificationTypeSchema(intl, notification)
          )
        : [])
    ]
  });
  return {
    fields: [
      ...addNotificationInfoSchema(intl),
      ...(notificationTypes && notificationTypes.length
        ? notificationTypes.map((notification) =>
            notificationTypeSchema(intl, nSetting, notification)
          )
        : [])
    ]
  };
};

export default addNotificationSchema;
