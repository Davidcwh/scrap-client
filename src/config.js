export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51H94UbB5Bf6QdkILPFUx10IQpnWsJSTfMndLdCHZOpt4JtimrUsH2PROMmndzIxBOdJBYySKV4SDntaU6Pq125kO00RNZaMAcn",
    s3: {
      REGION: "us-east-1",
      BUCKET: "scrap-uploads"
    },
    apiGateway: {
      REGION: "ap-southeast-1",
      URL: "https://yimc9e8aj1.execute-api.ap-southeast-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-1",
      USER_POOL_ID: "ap-southeast-1_oPOFmAyyP",
      APP_CLIENT_ID: "3bccbe0ve79ub154so00k9g8fq",
      IDENTITY_POOL_ID: "ap-southeast-1:2a02b271-b9ed-46cc-99c2-38afac645d15"
    }
  };