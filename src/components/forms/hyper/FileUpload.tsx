import { Row, Col, Card } from 'react-bootstrap';
import { FileUploader, PageTitle } from 'hyper_components';

const FileUpload = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/upload' },
                    { label: 'Form Upload', path: '/forms/upload', active: true },
                ]}
                title={'Form Upload'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Dropzone File Upload</h4>

                            <p className="text-muted font-13 m-b-30">
                                DropzoneJS is an open source library that provides drag’n’drop file uploads with image
                                previews.
                            </p>

                            <FileUploader
                                onFileUpload={(files) => {
                                    console.log(files);
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default FileUpload;
