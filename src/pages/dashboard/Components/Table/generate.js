import * as yup from 'yup';

function generateInitialValue(pageName) {
  if (pageName === 'teachers') {
    return [
      {
        name: '',
        surname: '',
        experince: '',
        subjects: '',
        about: {
          Uz: '',
          Ru: '',
        },
        imgUrl: [],
      },
      yup.object().shape({
        create: yup.array().of(
          yup.object().shape({
            name: yup.string().required("*Maydon to'ldirilishi kerak"),
            surname: yup.string().required("*Maydon to'ldirilishi kerak"),
            experince: yup.number().required("*Maydon to'ldirilishi kerak"),
            subjects: yup.string().required("*Maydon to'ldirilishi kerak"),
            about: yup
              .object()
              .shape({
                Uz: yup.string(),
                Ru: yup.string(),
              })
              .required("*Maydon to'ldirilishi kerak"),
            imgUrl: yup.array().nullable(),
          }),
        ),
      }),
    ];
  } else if (pageName === 'news') {
    return [
      {
        title: {
          Uz: '',
          Ru: '',
        },
        desc: {
          Uz: '',
          Ru: '',
        },
        data: {
          Uz: '',
          Ru: '',
        },
        imgUrl: [],
      },
      yup.object().shape({
        create: yup.array().of(
          yup.object().shape({
            imgUrl: yup.array().nullable(),
            data: yup
              .object()
              .shape({
                Uz: yup.object(),
                Ru: yup.object(),
              })
              .required("*Maydon to'ldirilishi kerak"),
            title: yup
              .object()
              .shape({
                Uz: yup.string(),
                Ru: yup.string(),
              })
              .required("*Maydon to'ldirilishi kerak"),
            desc: yup
              .object()
              .shape({
                Uz: yup.string(),
                Ru: yup.string(),
              })
              .required("*Maydon to'ldirilishi kerak"),
          }),
        ),
      }),
    ];
  } else if (pageName === 'courses') {
    return [
      {
        name: '',
        price: '',
        desc: {
          Uz: '',
          Ru: '',
        },
        imgUrl: [],
        teacherId: 'select',
      },
      yup.object().shape({
        create: yup.array().of(
          yup.object().shape({
            name: yup.string().required("*Maydon to'ldirilishi kerak"),
            price: yup
              .number()
              .required("*Maydon sonlar bilan to'ldirilishi kerak"),
            desc: yup
              .object()
              .shape({
                Uz: yup.string(),
                Ru: yup.string(),
              })
              .required("*Maydon to'ldirilishi kerak"),
            imgUrl: yup.array().nullable(),
            teacherId: yup.string().required("*Maydon to'ldirilishi kerak"),
          }),
        ),
      }),
    ];
  } else if (pageName === 'admins') {
    return [
      {
        adminName: '',
        password: '',
      },
      yup.object().shape({
        create: yup.array().of(
          yup.object().shape({
            adminName: yup.string().required("*Maydon to'ldirilishi kerak"),
            password: yup.string().required("*Maydon to'ldirilishi kerak"),
          }),
        ),
      }),
    ];
  } else if (pageName == 'results') {
    return [
      {
        fullname: '',
        year: '',
        university: '',
        points: '',
        status: '',
      },
      yup.object().shape({
        create: yup.array().of(
          yup.object().shape({
            fullname: yup.string().required("*Maydon to'ldirilishi kerak"),
            year: yup.number().required("*Maydon to'ldirilishi kerak"),
            university: yup.string().required("Maydon to'ldirilishi shart"),
            status: yup.string().required("Maydon to'ldirilishi shart"),
            points: yup.number().required("*Maydon to'ldirilishi kerak"),
          }),
        ),
      }),
    ];
  } else if (pageName === 'comments') {
    return [
      {
        name: '',
        desc: '',
        imgUrl: [],
      },
      yup.object().shape({
        create: yup.array().of(
          yup.object().shape({
            name: yup.string().required("*Maydon to'ldirilishi kerak"),
            desc: yup.string().required("*Maydon to'ldirilishi kerak"),
            imgUrl: yup.array().nullable(),
          }),
        ),
      }),
    ];
  }
}

export default generateInitialValue;
