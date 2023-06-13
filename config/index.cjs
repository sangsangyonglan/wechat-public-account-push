/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx61153d38a5129db2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '882901d71ad39c154090e0b8eb032495',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '苗苗',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '	osYid6ZVCfR9zUMkVzXvBFO855ss',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '_bnvNovKs7VlhA22mESI9ck0LnBMjy4ViZHWjIaglCI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '苗苗', year: '2001', date: '05-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '苗苗', year: '2001', date: '07-07',
        },
      ],
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '_bnvNovKs7VlhA22mESI9ck0LnBMjy4ViZHWjIaglCI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'osYid6ZVCfR9zUMkVzXvBFO855ss',
    }
  ],

}

module.exports = USER_CONFIG

