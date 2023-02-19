import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { UpdateGallery, UpdateProject, UpdateSkill } from '../models/update-site-interface';
import { UpdateServiceService } from './update-service.service';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  updateSkillForm!: FormGroup;
  updateGalleryForm!: FormGroup;
  updateProjectForm!: FormGroup;
  skillImgSrc: string = '../../../../assets/default-form-image/camera-photography-icon-logo-template-260nw-675469288.webp';
  selectedImage: any = null;
  galleryImgSrc: string = '../../../../assets/default-form-image/camera-photography-icon-logo-template-260nw-675469288.webp';
  selectedGalleryImage: any = null;
  projectImgSrc: string = '../../../../assets/default-form-image/camera-photography-icon-logo-template-260nw-675469288.webp';
  selectedProjectImage: any = null;
  isSubmitted: boolean = false;
  isLoading: boolean = false;
  imgUrl: string = ""

  constructor(
    private formBuilder: FormBuilder,
    private storage: Storage,
    private updateService: UpdateServiceService
    ) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  initializeForm() {
    (this.updateSkillForm = this.formBuilder.group({
      skillName: ['', Validators.compose([Validators.required])],
      skillImage: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      linkToSkillInfo: ['', Validators.compose([Validators.required])],
    })),
      (this.updateGalleryForm = this.formBuilder.group({
        galleryImage: ['', Validators.compose([Validators.required])],
      })),
      (this.updateProjectForm = this.formBuilder.group({
        projectName: ['', Validators.compose([Validators.required])],
        projectImage: ['', Validators.compose([Validators.required])],
        projectDescription: ['', Validators.compose([Validators.required])],
        techUsed: ['', Validators.compose([Validators.required])],
        projectLink: ['', Validators.compose([Validators.required])],
        gitRepo: ['', Validators.compose([Validators.required])],
      }));
  }

  // upload skill image
  uploadImage(data: any) {
    this.isSubmitted = true;
    this.isLoading = true;
    const filePath = `images/${this.selectedImage.name}_${new Date().getTime()}`
    const storageRef = ref(this.storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, this.selectedImage);
    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
      console.log("Upload is " + progress + " % done");
      this.isSubmitted = false;
      this.isLoading = false;
    },
    (error) => {
      console.log(error.message);
      this.isSubmitted = false;
      this.isLoading = false;
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        data['skillImage'] = downloadURL;
        this.imgUrl = downloadURL;
        console.log("File available at", this.imgUrl);
        this.isSubmitted = false;
        this.isLoading = false;
      })
    }
    )
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.skillImgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.skillImgSrc =
        '../../../../assets/default-form-image/camera-photography-icon-logo-template-260nw-675469288.webp';
      this.selectedImage = null;
    }
    this.uploadImage(this.selectedImage);
  }

  // upload gallery image
  showGalleryPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.galleryImgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedGalleryImage = event.target.files[0];
    } else {
      this.galleryImgSrc =
        '../../../../assets/default-form-image/camera-photography-icon-logo-template-260nw-675469288.webp';
      this.selectedGalleryImage = null;
    }
    this.uploadGalleryImage(this.selectedGalleryImage);
  }
  uploadGalleryImage(data: any) {
    this.isSubmitted = true;
    this.isLoading = true;
    const filePath = `galleryImages/${this.selectedGalleryImage.name}_${new Date().getTime()}`
    const storageRef = ref(this.storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, this.selectedGalleryImage);
    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
      console.log("Upload is " + progress + " % done");
      this.isSubmitted = false;
      this.isLoading = false;
    },
    (error) => {
      console.log(error.message);
      this.isSubmitted = false;
      this.isLoading = false;
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        data['galleryImage'] = downloadURL;
        this.imgUrl = downloadURL;
        console.log("File available at", this.imgUrl);
        this.isSubmitted = false;
        this.isLoading = false;
      })
    }
    )
  }

  // upload projects
  showProjectPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.projectImgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedProjectImage = event.target.files[0];
    } else {
      this.projectImgSrc =
        '../../../../assets/default-form-image/camera-photography-icon-logo-template-260nw-675469288.webp';
      this.selectedProjectImage = null;
    }
    this.uploadProjectImage(this.selectedProjectImage);
  }
  uploadProjectImage(data: any) {
    this.isSubmitted = true;
    this.isLoading = true;
    const filePath = `projectImages/${this.selectedProjectImage.name}_${new Date().getTime()}`
    const storageRef = ref(this.storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, this.selectedProjectImage);
    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
      console.log("Upload is " + progress + " % done");
      this.isSubmitted = false;
      this.isLoading = false;
    },
    (error) => {
      console.log(error.message);
      this.isSubmitted = false;
      this.isLoading = false;
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        data['projectImage'] = downloadURL;
        this.imgUrl = downloadURL;
        console.log("File available at", this.imgUrl);
        this.isSubmitted = false;
        this.isLoading = false;
      })
    }
    )
  }


  get formControls() {
    return this.updateSkillForm['controls'];
  }

  updateSkills(data) {
    const dataObject: UpdateSkill = {
      skillName: data.skillName,
      description: data.description,
      linkToSkillInfo: data.linkToSkillInfo,
      skillImage: this.imgUrl
    }
    this.isSubmitted = true;
    this.updateService.addSkills(dataObject).subscribe(
      (res) => {
        this.isSubmitted = false;
        this.updateSkillForm.reset();
        alertify.success("Skills updated successfully");
      },
      (error) => {
        this.isSubmitted = false;
        this.updateSkillForm.reset();
        alertify.error("Skills not updated");
      }
    )
  }

  updateGallery() {
    const imgObject: UpdateGallery = {
      galleryImage: this.imgUrl
    }
    this.isSubmitted = true;
    this.updateService.addImage(imgObject).subscribe(
      (res) => {
        this.isSubmitted = false;
        this.updateGalleryForm.reset();
        alertify.success("Gallery updated successfully");
      },
      (error) => {
        this.isSubmitted = false;
        this.updateGalleryForm.reset();
        alertify.error("Gallery not updated");
      }
    )
  }

  updateProjects(data) {
    this.isSubmitted = true;
    const projectObject: UpdateProject = {
      projectName: data.projectName,
      projectDescription: data.projectDescription,
      projectLink: data.projectLink,
      projectImage: this.imgUrl,
      gitRepo: data.gitRepo,
      techUsed: data.techUsed
    }
    this.updateService.addProject(projectObject).subscribe(
      (res) => {
        this.isSubmitted = false;
        this.updateProjectForm.reset();
        alertify.success("Project updated successfully");
      },
      (error) => {
        this.isSubmitted = false;
        this.updateProjectForm.reset();
        alertify.error("Gallery not updated");
      }
    )
  }
}

