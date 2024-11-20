export default {
  //   employeeCreate: {
  //     message({ firstName, lastName, email, password, nurseryName, frontendURL }) {
  //       return `
  //             <!DOCTYPE html>
  //       <html lang="en">
  //         <head>
  //           <meta charset="UTF-8" />
  //           <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  //           <meta name="x-apple-disable-message-reformatting" />
  //           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //           <title>Employee details</title>
  //           <link href="https://db.onlinewebfonts.com/c/0b6986b36b7d81188f996e58f2ec0643?family=Sharp+Grotesk+DB+Cyr+Medium+22" rel="stylesheet" type="text/css"/>
  //           <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>

  //           <style>
  //             @font-face {
  //               font-family: "Sharp Grotesk DB Cyr Medium 22";
  //               src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot");
  //               src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff2") format("woff2"),
  //               url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff") format("woff"),
  //               url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.ttf") format("truetype"),
  //               url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.svg#Sharp Grotesk DB Cyr Medium 22") format("svg");
  //             }

  //             *{box-sizing: border-box;}

  //             body{ background:#FFF; color:#000000; width:800px; height:100%; margin:0; padding:0; font-size:14px; font-family: "Sharp Grotesk DB Cyr Medium 22"; font-weight:normal; letter-spacing:normal; box-sizing: border-box;}

  //             p{font-family: 'Karla', sans-serif;  font-size:24px; font-weight:400; line-height:1.2;}
  //             h1{font-size:34px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;   line-height:normal; }
  //             h2{font-size:28px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;  line-height:normal; letter-spacing:normal; }
  //             td{border-collapse:collapse; }

  //             table {border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; }

  //             img, a img {border:none; outline:none; text-decoration:none; -ms-text-size-adjust:100%; mso-line-height-rule:exactly; -ms-interpolation-mode:bicubic; -webkit-text-size-adjust:100%;}
  //             p, h1,  h2, h3, h4, h5,  h6 {margin:0; display:block; padding:0; }
  //             p, a, li, td, blockquote {mso-line-height-rule:exactly; }

  //             table tr td{float:left; width:100%;}
  //             table tr{float:left; width:100%;}

  //             @media only screen and (max-width:600px){
  //               h1{font-size:24px !important; line-height:28.8px !important;}
  //               p{font-size:18px;}
  //               .main-sec table{width:90%; margin:0 auto;}
  //               .responsiveTd {width: 100% !important; border: none !important; display: block !important; padding:30px !important; }
  //               .responsiveTd tr{padding-bottom:30px !important;}
  //               .responsiveTd tr td br{display:none;}
  //               .responsiveTd tr td br:first-child{display:block;}
  //             }

  //             @media only screen and (max-width:479px) {
  //               h2, h1{font-size:24px !important; line-height:28.8px !important;}
  //               p{font-size:16px !important;  line-height:1.2; letter-spacing:-2%;}
  //               .responsiveTd {padding-left: 30px !important; padding-right: 30px !important;}
  //               .responsiveTd tr{padding-bottom:18px !important;}
  //               .mndiv table{padding-left: 30px !important; padding-right:30px !important;}
  //               .remove-top-mob { padding-top: 20px !important; }
  //               .remove-space-mob { padding-top: 40px !important; }
  //               .footer-mob {font-size:13px !important;}
  //             }
  //             .nowrap-cs {
  //               white-space: nowrap;
  //             }
  //           </style>
  //         </head>
  //         <body>

  //           <div class="mndiv" style="width: 100%;">
  //             <table class="responsiveTd" style="height:auto; padding-top: 20px;padding-bottom: 20px;padding-left: 90px; margin:0; display:block; max-width: 935px" >
  //               <tr class="remove-top-mob" style="padding-bottom:10px;">
  //                 <td>
  //                   <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Hi ${firstName} ${lastName},
  //                   </p>
  //                   <br><br>
  //                   <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       You've been successfully onboarded by your nursery admin.
  //                   </p>
  //                   <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Login here: ${frontendURL}
  //                   </p>
  //                   <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Your login details:
  //                   </p>
  //                   <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Email: ${email}
  //                   </p>
  //                   <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Password: ${password}
  //                   </p>
  //                   <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Feel free to reach out if you need any assistance.
  //                   </p>
  //                   <br><br>
  //                   <br><br>
  //                   <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                       Best regards,
  //                   </p>
  //                   <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                       ${nurseryName} Team
  //                   </p>
  //                 </td>
  //               </tr>
  //             </table>
  //           </div>
  //         </body>
  //       </html>`;
  //     },
  //   },

  //   childCreate: {
  //     subject: `NodeExpressTypeScriptStarterKit: Welcome to [nurseryName] `,
  //     message({ firstName, lastName, childFirstName, nurseryName, childLastName }) {
  //       return `
  //             <!DOCTYPE html>
  //       <html lang="en">
  //         <head>
  //           <meta charset="UTF-8" />
  //           <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  //           <meta name="x-apple-disable-message-reformatting" />
  //           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //           <title>Child Onboarding</title>
  //           <link href="https://db.onlinewebfonts.com/c/0b6986b36b7d81188f996e58f2ec0643?family=Sharp+Grotesk+DB+Cyr+Medium+22" rel="stylesheet" type="text/css"/>
  //           <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>

  //           <style>
  //             @font-face {
  //               font-family: "Sharp Grotesk DB Cyr Medium 22";
  //               src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot");
  //               src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff2") format("woff2"),
  //               url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff") format("woff"),
  //               url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.ttf") format("truetype"),
  //               url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.svg#Sharp Grotesk DB Cyr Medium 22") format("svg");
  //             }

  //             *{box-sizing: border-box;}

  //             body{ background:#FFF; color:#000000; width:800px; height:100%; margin:0; padding:0; font-size:14px; font-family: "Sharp Grotesk DB Cyr Medium 22"; font-weight:normal; letter-spacing:normal; box-sizing: border-box;}

  //             p{font-family: 'Karla', sans-serif;  font-size:24px; font-weight:400; line-height:1.2;}
  //             h1{font-size:34px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;   line-height:normal; }
  //             h2{font-size:28px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;  line-height:normal; letter-spacing:normal; }
  //             td{border-collapse:collapse; }

  //             table {border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; }

  //             img, a img {border:none; outline:none; text-decoration:none; -ms-text-size-adjust:100%; mso-line-height-rule:exactly; -ms-interpolation-mode:bicubic; -webkit-text-size-adjust:100%;}
  //             p, h1,  h2, h3, h4, h5,  h6 {margin:0; display:block; padding:0; }
  //             p, a, li, td, blockquote {mso-line-height-rule:exactly; }

  //             table tr td{float:left; width:100%;}
  //             table tr{float:left; width:100%;}

  //             @media only screen and (max-width:600px){
  //               h1{font-size:24px !important; line-height:28.8px !important;}
  //               p{font-size:18px;}
  //               .main-sec table{width:90%; margin:0 auto;}
  //               .responsiveTd {width: 100% !important; border: none !important; display: block !important; padding:30px !important; }
  //               .responsiveTd tr{padding-bottom:30px !important;}
  //               .responsiveTd tr td br{display:none;}
  //               .responsiveTd tr td br:first-child{display:block;}
  //             }

  //             @media only screen and (max-width:479px) {
  //               h2, h1{font-size:24px !important; line-height:28.8px !important;}
  //               p{font-size:16px !important;  line-height:1.2; letter-spacing:-2%;}
  //               .responsiveTd {padding-left: 30px !important; padding-right: 30px !important;}
  //               .responsiveTd tr{padding-bottom:18px !important;}
  //               .mndiv table{padding-left: 30px !important; padding-right:30px !important;}
  //               .remove-top-mob { padding-top: 20px !important; }
  //               .remove-space-mob { padding-top: 40px !important; }
  //               .footer-mob {font-size:13px !important;}
  //             }
  //             .nowrap-cs {
  //               white-space: nowrap;
  //             }
  //           </style>
  //         </head>
  //         <body>

  //           <div class="mndiv" style="width: 100%;">
  //             <table class="responsiveTd" style="height:auto; padding-top: 20px;padding-bottom: 20px;padding-left: 90px; margin:0; display:block; max-width: 935px" >
  //               <tr class="remove-top-mob" style="padding-bottom:10px;">
  //                 <td>
  //                   <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Hi ${firstName} ${lastName},
  //                   </p>
  //                   <br><br>
  //                   <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Your child <strong>${childFirstName} ${childLastName}</strong> has been successfully onboarded by ${nurseryName} admin.
  //                   </p>
  //                   <br>
  //                   <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                       Feel free to reach out if you need any assistance.
  //                   </p>
  //                   <br><br>
  //                   <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                       Best regards,
  //                   </p>
  //                   <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                       ${nurseryName} Team
  //                   </p>
  //                 </td>
  //               </tr>
  //             </table>
  //           </div>
  //         </body>
  //       </html>`;
  //     },
  //   },

  reset: {
    subject: `NodeExpressTypeScriptStarterKit: Welcome to [nurseryName] `,
    message({ firstName, lastName, email, shortLink }) {
      return `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>Reset Password</title>
            <link href="https://db.onlinewebfonts.com/c/0b6986b36b7d81188f996e58f2ec0643?family=Sharp+Grotesk+DB+Cyr+Medium+22" rel="stylesheet" type="text/css"/>
            <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>
        
            <style>
              @font-face {
                font-family: "Sharp Grotesk DB Cyr Medium 22";
                src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot");
                src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff2") format("woff2"),
                url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff") format("woff"),
                url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.ttf") format("truetype"),
                url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.svg#Sharp Grotesk DB Cyr Medium 22") format("svg");
              }
        
              *{box-sizing: border-box;}
        
              body{ background:#FFF; color:#000000; width:800px; height:100%; margin:0; padding:0; font-size:14px; font-family: "Sharp Grotesk DB Cyr Medium 22"; font-weight:normal; letter-spacing:normal; box-sizing: border-box;}
        
              p{font-family: 'Karla', sans-serif;  font-size:24px; font-weight:400; line-height:1.2;}
              h1{font-size:34px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;   line-height:normal; }
              h2{font-size:28px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;  line-height:normal; letter-spacing:normal; }
              td{border-collapse:collapse; }
        
              table {border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; }
        
              img, a img {border:none; outline:none; text-decoration:none; -ms-text-size-adjust:100%; mso-line-height-rule:exactly; -ms-interpolation-mode:bicubic; -webkit-text-size-adjust:100%;}
              p, h1,  h2, h3, h4, h5,  h6 {margin:0; display:block; padding:0; }
              p, a, li, td, blockquote {mso-line-height-rule:exactly; }
        
              table tr td{float:left; width:100%;}
              table tr{float:left; width:100%;}
        
              @media only screen and (max-width:600px){
                h1{font-size:24px !important; line-height:28.8px !important;}
                p{font-size:18px;}
                .main-sec table{width:90%; margin:0 auto;}
                .responsiveTd {width: 100% !important; border: none !important; display: block !important; padding:30px !important; }
                .responsiveTd tr{padding-bottom:30px !important;}
                .responsiveTd tr td br{display:none;}
                .responsiveTd tr td br:first-child{display:block;}
              }
        
              @media only screen and (max-width:479px) {
                h2, h1{font-size:24px !important; line-height:28.8px !important;}
                p{font-size:16px !important;  line-height:1.2; letter-spacing:-2%;}
                .responsiveTd {padding-left: 30px !important; padding-right: 30px !important;}
                .responsiveTd tr{padding-bottom:18px !important;}
                .mndiv table{padding-left: 30px !important; padding-right:30px !important;}
                .remove-top-mob { padding-top: 20px !important; }
                .remove-space-mob { padding-top: 40px !important; }
                .footer-mob {font-size:13px !important;}
              }
              .nowrap-cs {
                white-space: nowrap;
              }
            </style>
          </head>
          <body>
        
            <div class="mndiv" style="width: 100%;">
              <table class="responsiveTd" style="height:auto; padding-top: 20px;padding-bottom: 20px;padding-left: 90px; margin:0; display:block; max-width: 935px" >
                <tr class="remove-top-mob" style="padding-bottom:10px;">
                  <td>
                    <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                        Hi ${firstName} ${lastName},
                    </p>
                    <br><br>
                    <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                      It appears as though you have requested to reset the password for your account <strong>${email}</strong>
                    </p>
                    <br>
                    <br>
                    <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                        Click <strong><a href="${shortLink}">here</a></strong> to reset your password.
                    </p>
        
                    <br><br>
                    <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400; word-break: break-all;">
                        If you are having any trouble with the link, try clicking opening this link instead:
                        <br>
                        <strong><a href="${shortLink}">${shortLink}</a></strong>
                    </p>
                    <br>
                    <br>
                    <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                        This link will be valid upto 24 hours after that it will be expired automatically.
                    </p>
                    <br>
                    <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                    Please ignore this email if you did not request to reset your password. 
                    </p>
                    <br>
                    <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                        Feel free to reach out if you need any assistance.
                    </p>
                    <br><br>
                    <p style="color:#767676; font-size: 24px; font-weight: 400;">
                        Best regards,
                    </p>
                    <p style="color:#767676; font-size: 24px; font-weight: 400;">
                        NodeExpressTypeScriptStarterKit Team
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </body>
        </html>`;
    },
  },

  welcome: {
    subject: 'NodeExpressTypeScriptStarterKit: Welcome',
    message({ firstName, lastName, fontendURL }) {
      return `
          <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Welcome Email</title>
        <link href="https://db.onlinewebfonts.com/c/0b6986b36b7d81188f996e58f2ec0643?family=Sharp+Grotesk+DB+Cyr+Medium+22" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>

        <style>
          @font-face {
            font-family: "Sharp Grotesk DB Cyr Medium 22";
            src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot");
            src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff2") format("woff2"),
            url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff") format("woff"),
            url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.ttf") format("truetype"),
            url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.svg#Sharp Grotesk DB Cyr Medium 22") format("svg");
          }

          *{box-sizing: border-box;}

          body{ background:#FFF; color:#000000; width:800px; height:100%; margin:0; padding:0; font-size:14px; font-family: "Sharp Grotesk DB Cyr Medium 22"; font-weight:normal; letter-spacing:normal; box-sizing: border-box;}

          p{font-family: 'Karla', sans-serif;  font-size:24px; font-weight:400; line-height:1.2;}
          h1{font-size:34px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;   line-height:normal; }
          h2{font-size:28px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;  line-height:normal; letter-spacing:normal; }
          td{border-collapse:collapse; }

          table {border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; }

          img, a img {border:none; outline:none; text-decoration:none; -ms-text-size-adjust:100%; mso-line-height-rule:exactly; -ms-interpolation-mode:bicubic; -webkit-text-size-adjust:100%;}
          p, h1,  h2, h3, h4, h5,  h6 {margin:0; display:block; padding:0; }
          p, a, li, td, blockquote {mso-line-height-rule:exactly; }

          table tr td{float:left; width:100%;}
          table tr{float:left; width:100%;}

          @media only screen and (max-width:600px){
            h1{font-size:24px !important; line-height:28.8px !important;}
            p{font-size:18px;}
            .main-sec table{width:90%; margin:0 auto;}
            .responsiveTd {width: 100% !important; border: none !important; display: block !important; padding:30px !important; }
            .responsiveTd tr{padding-bottom:30px !important;}
            .responsiveTd tr td br{display:none;}
            .responsiveTd tr td br:first-child{display:block;}
          }

          @media only screen and (max-width:479px) {
            h2, h1{font-size:24px !important; line-height:28.8px !important;}
            p{font-size:16px !important;  line-height:1.2; letter-spacing:-2%;}
            .responsiveTd {padding-left: 30px !important; padding-right: 30px !important;}
            .responsiveTd tr{padding-bottom:18px !important;}
            .mndiv table{padding-left: 30px !important; padding-right:30px !important;}
            .remove-top-mob { padding-top: 20px !important; }
            .remove-space-mob { padding-top: 40px !important; }
            .footer-mob {font-size:13px !important;}
          }
          .nowrap-cs {
            white-space: nowrap;
          }
        </style>
      </head>
      <body>

        <div class="mndiv" style="width: 100%;">
          <table class="responsiveTd" style="height:auto; padding-top: 20px;padding-bottom: 20px;padding-left: 90px; margin:0; display:block; max-width: 935px" >
            <tr class="remove-top-mob" style="padding-bottom:10px;">
              <td>
                <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                    Dear ${firstName} ${lastName}
                </p>
                <br><br>
                <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                    Welcome to NodeExpressTypeScriptStarterKit – your partner in early childhood education excellence!
                </p>
                <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                    We're thrilled to have you onboard.
                </p>
                <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                    Install and log in to your account at: <a href="${fontendURL}/login">${fontendURL}</a>
                </p>
                <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
                    Excited to see your nursery thrive with NodeExpressTypeScriptStarterKit!
                </p>
                <br><br>
                <br><br>
                <p style="color:#767676; font-size: 24px; font-weight: 400;">
                    Best regards,
                </p>
                <p style="color:#767676; font-size: 24px; font-weight: 400;">
                    NodeExpressTypeScriptStarterKit Team
                </p>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>`;
    },
  },
  //     adminCreate: {
  //       message({ firstName, lastName, email, password, frontendURL }) {
  //         return `
  //         <!DOCTYPE html>
  //         <html lang="en">
  //           <head>
  //             <meta charset="UTF-8" />
  //             <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  //             <meta name="x-apple-disable-message-reformatting" />
  //             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //             <title>Admin Details</title>
  //             <link href="https://db.onlinewebfonts.com/c/0b6986b36b7d81188f996e58f2ec0643?family=Sharp+Grotesk+DB+Cyr+Medium+22" rel="stylesheet" type="text/css"/>
  //             <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>

  //             <style>
  //               @font-face {
  //                 font-family: "Sharp Grotesk DB Cyr Medium 22";
  //                 src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot");
  //                 src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff2") format("woff2"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff") format("woff"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.ttf") format("truetype"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.svg#Sharp Grotesk DB Cyr Medium 22") format("svg");
  //               }

  //               *{box-sizing: border-box;}

  //               body{ background:#FFF; color:#000000; width:800px; height:100%; margin:0; padding:0; font-size:14px; font-family: "Sharp Grotesk DB Cyr Medium 22"; font-weight:normal; letter-spacing:normal; box-sizing: border-box;}

  //               p{font-family: 'Karla', sans-serif;  font-size:24px; font-weight:400; line-height:1.2;}
  //               h1{font-size:34px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;   line-height:normal; }
  //               h2{font-size:28px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;  line-height:normal; letter-spacing:normal; }
  //               td{border-collapse:collapse; }

  //               table {border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; }

  //               img, a img {border:none; outline:none; text-decoration:none; -ms-text-size-adjust:100%; mso-line-height-rule:exactly; -ms-interpolation-mode:bicubic; -webkit-text-size-adjust:100%;}
  //               p, h1,  h2, h3, h4, h5,  h6 {margin:0; display:block; padding:0; }
  //               p, a, li, td, blockquote {mso-line-height-rule:exactly; }

  //               table tr td{float:left; width:100%;}
  //               table tr{float:left; width:100%;}

  //               @media only screen and (max-width:600px){
  //                 h1{font-size:24px !important; line-height:28.8px !important;}
  //                 p{font-size:18px;}
  //                 .main-sec table{width:90%; margin:0 auto;}
  //                 .responsiveTd {width: 100% !important; border: none !important; display: block !important; padding:30px !important; }
  //                 .responsiveTd tr{padding-bottom:30px !important;}
  //                 .responsiveTd tr td br{display:none;}
  //                 .responsiveTd tr td br:first-child{display:block;}
  //               }

  //               @media only screen and (max-width:479px) {
  //                 h2, h1{font-size:24px !important; line-height:28.8px !important;}
  //                 p{font-size:16px !important;  line-height:1.2; letter-spacing:-2%;}
  //                 .responsiveTd {padding-left: 30px !important; padding-right: 30px !important;}
  //                 .responsiveTd tr{padding-bottom:18px !important;}
  //                 .mndiv table{padding-left: 30px !important; padding-right:30px !important;}
  //                 .remove-top-mob { padding-top: 20px !important; }
  //                 .remove-space-mob { padding-top: 40px !important; }
  //                 .footer-mob {font-size:13px !important;}
  //               }
  //               .nowrap-cs {
  //                 white-space: nowrap;
  //               }
  //             </style>
  //           </head>
  //           <body>

  //             <div class="mndiv" style="width: 100%;">
  //               <table class="responsiveTd" style="height:auto; padding-top: 20px;padding-bottom: 20px;padding-left: 90px; margin:0; display:block; max-width: 935px" >
  //                 <tr class="remove-top-mob" style="padding-bottom:10px;">
  //                   <td>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Hi ${firstName} ${lastName},
  //                     </p>
  //                     <br><br>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Your account was successfully setup by our team.
  //                     </p>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Login here: <a href="${frontendURL}">${frontendURL}login</a>
  //                     </p>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Your login details:
  //                     </p>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Email: ${email}
  //                     </p>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Password: ${password}
  //                     </p>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Feel free to reach out if you need any assistance.
  //                     </p>
  //                     <br><br>
  //                     <br><br>
  //                     <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                         Best regards,
  //                     </p>
  //                     <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                         faisalCodes Team
  //                     </p>
  //                   </td>
  //                 </tr>
  //               </table>
  //             </div>
  //           </body>
  //         </html>
  //             `;
  //       },
  //     },
  //     parentCreate: {
  //       message({ firstName, lastName, email, password, nurseryName, frontendURL }) {
  //         return `
  //         <!DOCTYPE html>
  //         <html lang="en">
  //           <head>
  //             <meta charset="UTF-8" />
  //             <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  //             <meta name="x-apple-disable-message-reformatting" />
  //             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //             <title>Parent Details</title>
  //             <link href="https://db.onlinewebfonts.com/c/0b6986b36b7d81188f996e58f2ec0643?family=Sharp+Grotesk+DB+Cyr+Medium+22" rel="stylesheet" type="text/css"/>
  //             <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>

  //             <style>
  //               @font-face {
  //                 font-family: "Sharp Grotesk DB Cyr Medium 22";
  //                 src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot");
  //                 src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff2") format("woff2"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff") format("woff"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.ttf") format("truetype"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.svg#Sharp Grotesk DB Cyr Medium 22") format("svg");
  //               }

  //               *{box-sizing: border-box;}

  //               body{ background:#FFF; color:#000000; width:800px; height:100%; margin:0; padding:0; font-size:14px; font-family: "Sharp Grotesk DB Cyr Medium 22"; font-weight:normal; letter-spacing:normal; box-sizing: border-box;}

  //               p{font-family: 'Karla', sans-serif;  font-size:24px; font-weight:400; line-height:1.2;}
  //               h1{font-size:34px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;   line-height:normal; }
  //               h2{font-size:28px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;  line-height:normal; letter-spacing:normal; }
  //               td{border-collapse:collapse; }

  //               table {border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; }

  //               img, a img {border:none; outline:none; text-decoration:none; -ms-text-size-adjust:100%; mso-line-height-rule:exactly; -ms-interpolation-mode:bicubic; -webkit-text-size-adjust:100%;}
  //               p, h1,  h2, h3, h4, h5,  h6 {margin:0; display:block; padding:0; }
  //               p, a, li, td, blockquote {mso-line-height-rule:exactly; }

  //               table tr td{float:left; width:100%;}
  //               table tr{float:left; width:100%;}

  //               @media only screen and (max-width:600px){
  //                 h1{font-size:24px !important; line-height:28.8px !important;}
  //                 p{font-size:18px;}
  //                 .main-sec table{width:90%; margin:0 auto;}
  //                 .responsiveTd {width: 100% !important; border: none !important; display: block !important; padding:30px !important; }
  //                 .responsiveTd tr{padding-bottom:30px !important;}
  //                 .responsiveTd tr td br{display:none;}
  //                 .responsiveTd tr td br:first-child{display:block;}
  //               }

  //               @media only screen and (max-width:479px) {
  //                 h2, h1{font-size:24px !important; line-height:28.8px !important;}
  //                 p{font-size:16px !important;  line-height:1.2; letter-spacing:-2%;}
  //                 .responsiveTd {padding-left: 30px !important; padding-right: 30px !important;}
  //                 .responsiveTd tr{padding-bottom:18px !important;}
  //                 .mndiv table{padding-left: 30px !important; padding-right:30px !important;}
  //                 .remove-top-mob { padding-top: 20px !important; }
  //                 .remove-space-mob { padding-top: 40px !important; }
  //                 .footer-mob {font-size:13px !important;}
  //               }
  //               .nowrap-cs {
  //                 white-space: nowrap;
  //               }
  //             </style>
  //           </head>
  //           <body>

  //             <div class="mndiv" style="width: 100%;">
  //               <table class="responsiveTd" style="height:auto; padding-top: 20px;padding-bottom: 20px;padding-left: 90px; margin:0; display:block; max-width: 935px" >
  //                 <tr class="remove-top-mob" style="padding-bottom:10px;">
  //                   <td>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Hi ${firstName} ${lastName},
  //                     </p>
  //                     <br><br>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         You've been successfully onboarded by your nursery admin.
  //                     </p>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Login here: <a href="${frontendURL}">${frontendURL}login</a>
  //                     </p>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Your login details:
  //                     </p>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Email: ${email}
  //                     </p>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Password: ${password}
  //                     </p>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Feel free to reach out if you need any assistance.
  //                     </p>
  //                     <br><br>
  //                     <br><br>
  //                     <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                         Best regards,
  //                     </p>
  //                     <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                         ${nurseryName} Team
  //                     </p>
  //                   </td>
  //                 </tr>
  //               </table>
  //             </div>
  //           </body>
  //         </html>
  //             `;
  //       },
  //     },
  //     demoRequest: {
  //       subject: 'NodeExpressTypeScriptStarterKit: Demo Request',
  //       message({ firstName, lastName, frontendURL, demoDate, demoTime, adminMessage }) {
  //         return `
  //         <!DOCTYPE html>
  //         <html lang="en">
  //           <head>
  //             <meta charset="UTF-8" />
  //             <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  //             <meta name="x-apple-disable-message-reformatting" />
  //             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //             <title>Admin Details</title>
  //             <link href="https://db.onlinewebfonts.com/c/0b6986b36b7d81188f996e58f2ec0643?family=Sharp+Grotesk+DB+Cyr+Medium+22" rel="stylesheet" type="text/css"/>
  //             <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet"/>

  //             <style>
  //               @font-face {
  //                 font-family: "Sharp Grotesk DB Cyr Medium 22";
  //                 src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot");
  //                 src: url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff2") format("woff2"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.woff") format("woff"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.ttf") format("truetype"),
  //                 url("https://db.onlinewebfonts.com/t/0b6986b36b7d81188f996e58f2ec0643.svg#Sharp Grotesk DB Cyr Medium 22") format("svg");
  //               }

  //               *{box-sizing: border-box;}

  //               body{ background:#FFF; color:#000000; width:800px; height:100%; margin:0; padding:0; font-size:14px; font-family: "Sharp Grotesk DB Cyr Medium 22"; font-weight:normal; letter-spacing:normal; box-sizing: border-box;}

  //               p{font-family: 'Karla', sans-serif;  font-size:24px; font-weight:400; line-height:1.2;}
  //               h1{font-size:34px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;   line-height:normal; }
  //               h2{font-size:28px; font-style:normal; font-weight:400; font-family: 'Karla', sans-serif;  line-height:normal; letter-spacing:normal; }
  //               td{border-collapse:collapse; }

  //               table {border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; }

  //               img, a img {border:none; outline:none; text-decoration:none; -ms-text-size-adjust:100%; mso-line-height-rule:exactly; -ms-interpolation-mode:bicubic; -webkit-text-size-adjust:100%;}
  //               p, h1,  h2, h3, h4, h5,  h6 {margin:0; display:block; padding:0; }
  //               p, a, li, td, blockquote {mso-line-height-rule:exactly; }

  //               table tr td{float:left; width:100%;}
  //               table tr{float:left; width:100%;}

  //               @media only screen and (max-width:600px){
  //                 h1{font-size:24px !important; line-height:28.8px !important;}
  //                 p{font-size:18px;}
  //                 .main-sec table{width:90%; margin:0 auto;}
  //                 .responsiveTd {width: 100% !important; border: none !important; display: block !important; padding:30px !important; }
  //                 .responsiveTd tr{padding-bottom:30px !important;}
  //                 .responsiveTd tr td br{display:none;}
  //                 .responsiveTd tr td br:first-child{display:block;}
  //               }

  //               @media only screen and (max-width:479px) {
  //                 h2, h1{font-size:24px !important; line-height:28.8px !important;}
  //                 p{font-size:16px !important;  line-height:1.2; letter-spacing:-2%;}
  //                 .responsiveTd {padding-left: 30px !important; padding-right: 30px !important;}
  //                 .responsiveTd tr{padding-bottom:18px !important;}
  //                 .mndiv table{padding-left: 30px !important; padding-right:30px !important;}
  //                 .remove-top-mob { padding-top: 20px !important; }
  //                 .remove-space-mob { padding-top: 40px !important; }
  //                 .footer-mob {font-size:13px !important;}
  //               }
  //               .nowrap-cs {
  //                 white-space: nowrap;
  //               }
  //             </style>
  //           </head>
  //           <body>

  //             <div class="mndiv" style="width: 100%;">
  //               <table class="responsiveTd" style="height:auto; padding-top: 20px;padding-bottom: 20px;padding-left: 90px; margin:0; display:block; max-width: 935px" >
  //                 <tr class="remove-top-mob" style="padding-bottom:10px;">
  //                   <td>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Hi ${firstName} ${lastName},
  //                     </p>
  //                     <br>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Your demo request has been for NodeExpressTypeScriptStarterKit has been approved by our team.
  //                     </p>
  //                     <br>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Demo details:
  //                     </p>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Date & Time: <strong>${demoTime}</strong>
  //                     </p>
  //                     <p style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Message: <strong>${adminMessage}</strong>
  //                     </p>
  //                     <br>
  //                     <p class="remove-top-mob" style="color:#767676; line-height: 28.8px; font-size: 24px; font-weight: 400;">
  //                         Feel free to reach out if you need any assistance.
  //                     </p>
  //                     <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                         Best regards,
  //                     </p>
  //                     <p style="color:#767676; font-size: 24px; font-weight: 400;">
  //                         faisalCodes Team
  //                     </p>
  //                   </td>
  //                 </tr>
  //               </table>
  //             </div>
  //           </body>
  //         </html>
  //         `;
  //       },
  //     },
};
