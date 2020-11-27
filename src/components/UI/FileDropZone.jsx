import React, {useEffect, useState} from 'react';
import {DropzoneDialog} from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import {Typography, Link} from '@material-ui/core';

export default function FileDropzone(props) {

  const [open, setOpen] = useState(false);
  const [currentImageName, setcurrentImageName] = useState([])
  console.log(props)
  return (
    <div
      style={{marginTop: '20px'}}
    >
      <Button 
        variant="contained" 
        color="primary"
        style={{marginBottom: '15px'}}
        // style={{height: '80px'}} 
        onClick={() => setOpen(true)}>
        Добавить файл(ы)
      </Button>

      <DropzoneDialog
        // acceptedFiles={["image/*"]}
        dropzoneText="Выберите или перетащите файл"
        dialogTitle="Загрузить файл"
        cancelButtonText="Отмена"
        submitButtonText="Загрузить"
        previewText="Файл(ы): "
        maxFileSize={5000000}
        filesLimit={5}
        open={open}
        alertSnackbarProps={{message: 'bazar jok!'}}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          console.log("Files:", files);
          // props.setFieldValue(props.name, files[0])
          setOpen(false);
        }}
        showPreviews={true}
        showAlerts={false}
        showFileNamesInPreview={true}
        getFileAddedMessage={(fileName) => setcurrentImageName([...currentImageName, fileName])}
      />

      {
        props.existingFileLink && typeof props.existingFileLink === 'string'
          ? <Typography className="mt-2">
            <Link href={props.existingFileLink}>{props.existingFileLink.substring(8, 28)}</Link>
          </Typography>
          : 
          currentImageName.map((link, index) => (
          <>
          <Typography className="mt-2" color="textSecondary">
            {link.length > 30 ? link.substring(0, 29) + "..." : link}
          </Typography>
          <br/>
          </>
        ))
      }
    </div>
  );
}
