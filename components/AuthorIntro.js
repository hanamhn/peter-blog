import { Col, Image, Media, Row } from "react-bootstrap";

const AuthorIntro = () => {
  return (
    <Row>
      <Col md="8">
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={72}
            height={72}
            className="mr-3"
            src="https://previews-tu.wetransfer.net/file/wetransfer/j1ot/f3abb7c5436b6cdbc5c5cccc9fb0207920220427111454/hl-4048236458?width=512&height=512&source=storm&origin=transfer-free&url=https%3A%2F%2Fstorm-us-east-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2VxOWRidyIsImV4cCI6bnVsbCwicHVyIjoiaW50ZXJuYWxfZmlsZV9kb3dubG9hZCJ9fQ--b1bc695c5fe6b9aadf56785453942be6813855ecb7e5326f1474775ebf7f8b26%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMlZ4T1dSaWR5SXNJbVY0Y0NJNmJuVnNiQ3dpY0hWeUlqb2lhVzUwWlhKdVlXeGZabWxzWlY5a2IzZHViRzloWkNKOWZRLS1iMWJjNjk1YzVmZTZiOWFhZGY1Njc4NTQ1Mzk0MmJlNjgxMzg1NWVjYjdlNTMyNmYxNDc0Nzc1ZWJmN2Y4YjI2IiwiZXhwIjoxNjUxMDYxNzYzLCJpYXQiOjE2NTEwNTgxNjMsImtpZCI6IkZyM3IifQ.Go01QxRGCbcqtKwPvbXNJ33aEK2mNjUoFgVuorkOq24&s=271a8cc0fbfa2060ee182c3821485a135bbbed23&Expires=1651061763&Signature=HMPg5fJ-S0djni5QKdYmLbtzEtiNh8sADRbWGrG~05HuE5obsaCANG~A-gMJoEx2TTSoYtXS6RJGjxQytEP-SsXOV5cNYyMpsppXnWRL0GVmmXYcGLzSfN069tkVkfvsyLeSm2lOCRhL3KXT0ftFFFXwcVH-Y0JP1FXW3i9rFCoN7PBns~FBMK6ruz1QUnNR0dRfucK-~UI5Dr1tuNrzMgHnFpXhfPBcyASH-jq3K3gjs~cond4rVglQRswwUQsfkBA335anLWxTLtlkYpQ7swkSPjW3jK5fJXEY5OW44nBnWkFfoychN0RKTUIGq9hPCEpDsH5WzijSp572OB2XaQ__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
              My name is Huynh Nguyen Ha Nam and I am an experienced software
              engineer and freelance developer. and this is my blog page.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
};

export default AuthorIntro;
